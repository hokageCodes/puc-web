import React from 'react';

export default function SplitScreenCareersPage() {
  return (
    <section className="bg-white py-12 px-4 mx-auto max-w-screen-lg flex flex-col lg:flex-row mt-12">
      <div className="lg:w-1/2 lg:pr-8">
        <div className="text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl font-bold text-[#01553d] mb-4">Interested in Joining?</h1>
          <p className="text-lg text-gray-700 mb-8">
            At PUC, we recruit and retain legal professionals with a strong academic background and the ability to solve complex issues and provide sound legal advice to clients. We are structured to allow our lawyers to define their career paths within the ambit of advocacy and transactional practice. This helps our lawyers develop specialized skills in preferred practice areas.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our reputation for unparalleled service delivery is attributable to our recruitment, development, and training of persons with brilliant academic antecedents and a variety of relevant skills and interests. These persons embody PUC&#39;s values and vision, possess the character, and nurture the desire to surpass the challenges presented by a demanding practice.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We encourage continuous learning for both personal and professional development by organizing in-house trainings and sponsoring professional training courses and higher degree programs. PUC offers equal opportunities to all persons, regardless of race, gender, and ethnicity.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We invite qualified applicants who share our values and commitment to begin or build their careers with us by applying to the Human Resource Manager at <a href="mailto:careers@paulusoro.com" className="text-blue-500 underline">careers@paulusoro.com</a>.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 lg:pl-8">
        <div className="space-y-8">
          {/* Fresh Counsel */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#01553d] mb-4">Fresh Counsel Requirements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Minimum of Second Class Upper (2.1) degree from the University and the Nigerian Law School - a Second Class Lower (2:2) from one of the above will be considered</li>
              <li>0 to 2 years post-call-to-bar experience</li>
              <li>Excellent oral and written communication</li>
              <li>Good IT Skills</li>
              <li>Basic knowledge of Nigerian laws</li>
              <li>Self-confidence</li>
              <li>Not above 30 years old</li>
              <li>Post Graduate Degree in Practice Sections above will be an advantage</li>
            </ul>
            <a href="mailto:careers@paulusoro.com" className="inline-block bg-[#01553d] text-white py-2 px-4 rounded-lg text-center mt-4">Apply Now</a>
          </div>

          {/* Experienced Counsel */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#01553d] mb-4">Experienced Counsel Requirements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Minimum of Second Class Upper (2.1) degree from the University and the Nigerian Law School - a Second Class Lower (2:2) from one of the above will be considered</li>
              <li>3 - 5 years practice experience in a reputable Law Firm</li>
              <li>Excellent oral and written communication</li>
              <li>Excellent leadership and negotiation skills</li>
              <li>Excellent relationship management skills</li>
              <li>Good IT Skills</li>
              <li>Deep knowledge of Nigerian laws</li>
              <li>Good Reference from last employer</li>
              <li>Post Graduate Degree in Practice Sections above will be an advantage</li>
            </ul>
            <a href="mailto:careers@paulusoro.com" className="inline-block bg-[#01553d] text-white py-2 px-4 rounded-lg text-center mt-4">Apply Now</a>
          </div>

          {/* Internship Program */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#01553d] mb-4">Internship Program</h2>
            <p className="text-lg text-gray-700 mb-4">
              We encourage law students and law graduates who are yet to attend the Nigerian Law School to participate in our internship program.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              During the program, our interns work in our different practice areas, and acquire a wealth of practical experience to build on the theoretical aspects of what they had learned at the University. Generally, our interns are exposed to our work ethics, standards, systems, and values.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Persons interested in participating in our internship program should send his/her application letter and CV to <a href="mailto:careers@paulusoro.com" className="text-blue-500 underline">careers@paulusoro.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
