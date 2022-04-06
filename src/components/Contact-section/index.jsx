import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const { register, handleSubmit, errors, reset } = useForm();
  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const res = await axios(config);
      console.log(res);
      if (res.status === 200) {
        reset();
        toast(
          'success',
          'Thank you for contacting us, we will be in touch soon.'
        );
      }
    } catch (err) {}
  }

  return (
    <><div>sdsd</div><div>dfdf</div>
    
    <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
        <span className="izquierda">BLOCK</span>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6">
          <div className='row'>
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="name"
                ref={register({
                  required: {
                    value: true,
                    message: 'You must enter your name',
                  },
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : null}`}
                placeholder="Full name" />
              <span className="text-red-400 text-sm py-2">
                {errors?.name?.message}
              </span>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                name="email"
                type="text"
                ref={register({
                  required: {
                    value: true,
                    message: 'You must enter your email address',
                  },
                  minLength: {
                    value: 8,
                    message: 'This is not long enough to be an email',
                  },
                  maxLength: {
                    value: 120,
                    message: 'This is too long',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'This needs to be a valid email address',
                  },
                })}
                className={`emailclass block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'ring-2 ring-red-500' : null}`}
                placeholder="Email" />
              <span className="text-red-400 text-sm py-2">
                {errors?.email?.message}
              </span>
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                ref={register}
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                placeholder="Telegram" />
            </div>
          </div>
          <div className='mensaje'>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              ref={register({
                required: {
                  value: true,
                  message: 'You need to enter your message',
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
                minLength: {
                  value: 20,
                  message: 'Your message must be longer than this!',
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'ring-2 ring-red-500' : null}`}
              placeholder="Cuéntanos lo que necesites"></textarea>
            <span className="text-red-400 text-sm py-2">
              {errors?.message?.message}
            </span>
          </div>
          <p className='aceptar'>Enviando el mensaje acepto la política de privacidad que todavía no está creada.</p>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Enviar mensaje
            </button>
          </div>
          <Toaster />
        </form>
      </div>
    </div></>
  );
}