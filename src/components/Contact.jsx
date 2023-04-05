function Contact() {
  return (
    <div className="min-h-screen bg-[#000814] text-[#61A5C2]" id="CONTACT">
      <div className="flex container flex-wrap mx-auto w-3/4 mt-[10rem] text-lg">
        <div className="w-full p-8">
          <h2 className="w-full font-bold text-3xl mb-8 text-[#A9D6E5]">
            <span className="text-[#00FFBF] font-light">04.</span> Get in touch
          </h2>
          <div className="w-[40rem] flex flex-wrap gap-2 mx-auto mt-20">
            <p>
              I'm always interested in hearing from people who want to discuss
              potential collaboration or job opportunities.
            </p>
            <p>
              If you're interested in working together or just want to say
              hello, please feel free to get in touch! You can reach me at
              <span className="text-[#00FFBF]"> josalasrod21@gmail.com </span>
              or connect with me on{" "}
              <a className="text-[#00FFBF]" href="">
                linkedin.
              </a>
            </p>
            <p>Looking forward to hearing from you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
