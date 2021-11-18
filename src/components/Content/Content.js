import React, { useState } from 'react';
import classes from './Content.module.css';
import Modal from '../Modal/Modal';

const Content = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({});

  const creatModal = (e) => {
    setModal({
      title: buttonInfo[e.currentTarget.dataset.id].title,
      subTitle: buttonInfo[e.currentTarget.dataset.id].subTitle,
      url: buttonInfo[e.currentTarget.dataset.id].url,
      message: buttonInfo[e.currentTarget.dataset.id].message,
    });

    setOpen(true);
  };

  const buttonInfo = [
    {
      title: 'Demo 1',
      subTitle: 'Custom theme without Page Builder',
      url: 'https://zhi-wp.9purple.com/',
      message: [
        'Highlights of the Project: A simple theme built with the help of Advanced Custom Fields only. Custom made post types, CSS, SCSS, Javascript, and WordPress Script. ',
      ],
    },
    {
      title: 'Demo 2',
      subTitle: 'Custom theme, Figma to Divi',
      url: 'https://zp.9purple.com/',
      message: [
        'Figma Design: https://www.figma.com/file/8uSTaq89GfKsYrfhShKyKU/MEDDICAL---Hospital-website-template-(Community)?node-id=147%3A1780',
        'WordPress site https://zp.9purple.com/  ',
      ],
    },
    {
      title: 'Demo 3',
      subTitle: 'Headless WordPress by Gatsby',
      url: 'https://zhi-wp-tour.netlify.app/',
      message: [
        'Highlights of the Project: Using React Gatsby to generate static site for traditional Wordpress php site, it provides much better page loading time and improves user experience a lot. ',
        'Key Features: Use Graphql as an api endpoint to query data; WordPress site https://zhi-demo.9purple.com/ as content management, Gatsby Webhook in place, website is dynamically built. ',
      ],
    },

    {
      title: 'Demo 4',
      subTitle: '"React Single Page App',
      url: 'https://zhi-wp-commerce.netlify.app/',
      message: [
        'Highlights of the Project: Using Single Page Application React as front end, Commerce.js as back end, completely setup with Stripe, ready-to-production. ',
        'Key Features of the Project: Complete shopping-cart setup, react-form-hook, using environment token to access Commerce.js and Stripe, material-ui for styling, a very SWEET site.',
      ],
    },
  ];

  const back = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      {buttonInfo.map((item, index) => (
        <div className={classes.item} key={index}>
          <button
            className={classes.button}
            data-id={index}
            onClick={creatModal}
          >
            <div className={classes.container}>
              <div className={classes.title}>{item.title}</div>
              <div className={classes.description}>{item.subTitle}</div>
            </div>
          </button>
        </div>
      ))}

      {open && (
        <Modal
          back={back}
          title={modal.title}
          subTitle={modal.subTitle}
          url={modal.url}
          message={modal.message}
        />
      )}
    </div>
  );
};

export default Content;
