import MailchimpSubscribe from 'react-mailchimp-subscribe';
import EmailSignup from './EmailSignup';

const NewsletterSubscribe = () => {

  const MAILCHIMP_URL = process.env.MAILCHIMP_URL;
 

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <EmailSignup
            status={ status }
            message={ message }
            onValidated={ data => subscribe( data ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;