"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .required('Subject is required'),
  message: Yup.string()
    .required('Message is required'),
});

export default function ContactPage() {
    return (
        <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-5xl tracking-tight font-bold text-center text-[#01553d] mt-12">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
            </p>
            <Formik
            initialValues={{ email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                // Handle form submission here
                console.log(values);
                setSubmitting(false);
            }}
            >
            {({ isSubmitting }) => (
                <Form className="space-y-3 mt-[-40px]">
                <div>
                    <label htmlFor="email" className="block mb-2 text-lg font-medium text-[#01553d]">Your email</label>
                    <Field
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-white border border-[#01553d] text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="name@flowbite.com"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label htmlFor="subject" className="text-[#01553d] block mb-2 text-lg font-medium">Subject</label>
                    <Field
                    type="text"
                    id="subject"
                    name="subject"
                    className="shadow-sm bg-white border border-[#01553d] text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Subject"
                    />
                    <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-lg font-medium text-[#01553d]">Your message</label>
                    <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="6"
                    className="shadow-sm bg-white border border-[#01553d] text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Leave a comment..."
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-5 text-lg font-medium text-center text-white rounded-xl bg-[#01553d] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Send message
                </button>
                </Form>
            )}
            </Formik>
        </div>
        </section>
    );
}
