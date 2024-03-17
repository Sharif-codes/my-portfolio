import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9k7oqm', 'template_92j9n8s', form.current, 'zZe7zFYLI5EnmjTIq')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <Card color="transparent" shadow={false} className="pt-20 flex flex-col justify-center items-center">
      <Typography variant="h4" color="" className="text-4xl text-primary">
        Contact Me
      </Typography>
      <form ref={form} onSubmit={sendEmail} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-2">
            Your Name
          </Typography>
          <Input
            name="user_name"
            size="lg"
            placeholder="Enter Your name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-2">
            Your Email
          </Typography>
          <Input
            name="user_email"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-2">
            Text
          </Typography>
          <Textarea
            name="message"
            type="text"
            size="lg"
            placeholder="Enter text"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button type="submit" className="bg-primary mb-7" fullWidth>
          Send Email
        </Button>
      </form>
    </Card>

  );
};

export default ContactUs;