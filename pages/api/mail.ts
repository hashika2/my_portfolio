import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey('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');

const mailService = async (req:NextApiRequest,res:NextApiResponse) => {
    const {name,email,subject,message} = req.body;
    try {
        await sendgrid.send({
          to: "anjanashakthi.ja@gmail.com", // Your email where you'll receive emails
          from: "anjanashakthi114@gmail.com", // your website email address here
          subject: 'CONTACT ME(portfolio web)',
          html: `<div>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Subject: ${subject}</p>
                    <p>Message: ${message}</p>
                </div>`,
        });

        res.json({message: 'email has been sent'})
      } catch (error) {
        console.log(error);
        
      }
    
      
}

export default mailService;