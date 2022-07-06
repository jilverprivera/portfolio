import { networks } from "../../helpers/networks";

const Footer = () => {
  return (
    <div className="h-96 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-4xl font-semibold mb-3">Let&apos;s Connect!</h2>
        <p className="text-base font-normal mb-5">
          Feel free to send me a message on my social networks
        </p>
        <div className="flex items-center justify-center">
          {networks.map((item, i) => (
            <a
              href={item.url}
              key={i}
              className={`mx-2 w-10 h-10 flex items-center justify-center rounded-full`}
            >
              <span className="text-2xl">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mb-3">
        <span className="text-slate-700 text-sm mb-2 dark:text-gray-300">
          Jilver Pacheco Rivera • @jilverprivera • All rights reserved © 2020-
          {new Date().getFullYear()}
        </span>
        <span className="text-slate-700 text-sm dark:text-gray-300">
          From Colombia ❤ to the world
        </span>
      </div>
    </div>
  );
};

export default Footer;
