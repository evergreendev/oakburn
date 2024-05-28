"use server"
import * as AWS from "aws-sdk";
import * as nodeMailer from "nodemailer";

AWS.config.update({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
    region: "us-east-2",
});
AWS.config.getCredentials((err, credentials) => {
    if (err) {
        console.error(err.stack);
    }
});
const ses = new AWS.SES({apiVersion: "latest"});

const adminMail = "noreply@oakburnbarbecue.com"/*todo Change this*/

const transporter = nodeMailer.createTransport({
    SES: ses
});

export const sendMembershipMail = async (prevState: any, formData: FormData) => {
    console.log(formData);
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phone = formData.get("phone");
    const numberOfPeople = formData.get("number_of_people");
    const date = formData.get("date");
    const time = formData.get("time");

    let error = "";

    if (error){
        return {
            message:"",
            error:error
        }
    }

    try {
        await transporter.sendMail({
            from: adminMail,
            to: process.env.ADMIN_EMAIL,/*todo change this*/
            replyTo: email as string,
            subject: `New Catering Request from ${firstName} ${lastName} (oakburnbarbecue.com)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
<strong>Name:</strong> ${firstName} ${lastName} <br/>
<strong>Email:</strong> ${email} <br/>
<strong>Phone:</strong> ${phone} <br/>
<strong>Number of People:</strong> ${numberOfPeople} <br/>
<strong>Date:</strong> ${date} ${time} <br/>
</p>
<p>

</p>
</div>
</div>
</body>
</html>
            `
        });
//confirmation email
        await transporter.sendMail({
            from: adminMail,
            to: email as string,
            replyTo: adminMail,
            subject: `Catering request confirmation (oakburnbarbecue.com)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
<p>
<strong>Name:</strong> ${firstName} ${lastName} <br/>
<strong>Email:</strong> ${email} <br/>
<strong>Phone:</strong> ${phone} <br/>
<strong>Number of People:</strong> ${numberOfPeople} <br/>
<strong>Date:</strong> ${date} ${time} <br/>
</p>
<p>

</p>
</div>
</div>
</body>
</html>
            `
        });

        return {
            message: "Your catering request has been sent. Thank you for choosing Oak Burn BBQ. We'll be in touch soon!",
            error: ""
        }

    } catch (e) {
        console.error(e);
        return {error: "There was a problem sending your message please try again later.", msg: ""}
    }
}

export const sendMail = async (prevState: any, formData: FormData) => {
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phone = formData.get("phone");
    const message = formData.get("message");
    let error = "";

    if(!email){
        error += "Please enter a valid email address. ";
    }
    if(!firstName){
        error += "Please enter a valid first name. ";
    }
    if(!lastName){
        error += "Please enter a valid last name. ";
    }
    if(!phone){
        error += "Please enter a valid phone number. ";
    }
    if(!message){
        error += "Please enter a message.";
    }

    if (error){
        return {
            message:"",
            error:error
        }
    }

    try {
        await transporter.sendMail({
            from: adminMail,
            to: "joe@egmrc.com",
            replyTo: email as string,
            subject: `New Contact form submission from ${firstName} ${lastName} (oakburnbarbecue.com)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
Name: ${firstName} ${lastName} <br/>
Email: ${email} <br/>
Phone: ${phone} <br/>
</p>
<p>
${message}
</p>
</div>
</div>
</body>
</html>
            `
        });
//confirmation email
        await transporter.sendMail({
            from: adminMail,
            to: email as string,
            replyTo: adminMail,
            subject: `Contact form submission confirmation (oakburnbarbecue.com)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
This is to acknowledge your recent contact form submission from (oakburnbarbecue.com)<br/>
Name: ${firstName} ${lastName} <br/>
Email: ${email} <br/>
Phone: ${phone} <br/>
</p>
<p>
${message}
</p>
</div>
</div>
</body>
</html>
            `
        });

        return {
            message: "Your contact submission has been sent. Thank you for contacting Western Dakota Regional Water System.",
            error: ""
        }

    } catch (e) {
        console.error(e);
        return {error: "There was a problem sending your message please try again later.", msg: ""}
    }


}

export const testMail = async (userEmail: string) => {
    try {
        const response = await transporter.sendMail({
            from: adminMail,
            to: userEmail,
            subject: "test",
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<h2>Test Mail</h2>
<p>
Hi there,<br/><br/>
This is a test mail.
</p>
</div>
</div>
</body>
</html>
            `
        });
        return response?.messageId;
    } catch (e) {
        console.error(e);
        return {ok: false, msg: "Failed to Send"}
    }
}