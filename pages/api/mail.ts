import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey('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');

const mailService = async (req:NextApiRequest,res:NextApiResponse) => {
    const {name,email,subject,message} = req.body;
    console.log('----------------',req.body)
    try {
       const r = await sendgrid.send({
          to: "anjanashakthi.ja@gmail.com", // Your email where you'll receive emails
          from: "anjanashakthi114@gmail.com", // your website email address here
          subject: 'CONTACT ME(portfolio web)',
          text: 'aanaa'
        });

        console.log('rrrrr',r);

        res.send({status: 'success',message: 'email has been sent'})
      } catch (error) {
        console.log(error);
        
      }
    
      
}

export default mailService;