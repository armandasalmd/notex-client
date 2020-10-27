import React from 'react';
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>What do we offer</p>
            </span>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src="/images/ira/inbox.svg" alt=""></img>
              )
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Share your notes</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Let your friends and study mates learn from you</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src="/images/ira/pig.svg" alt=""></img>
              )
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Completely free</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    You don't need to pay for this app. It's completely free
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src="/images/ira/rocket.svg" alt=""></img>
              )
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Notebooks saved in cloud</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Create notes and login anywhere to retrieve them back</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Notex app features</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>Do you want to know what Notex can do for you?</p>
          </span>
        ),
      },
    ],
  },
  img: {
    children: '/images/undraw/undraw_work_time.svg',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            '/images/ira/bag.svg',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <p>Group your notes into notebooks</p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                You can create separate notebooks acting as folders to group
                your work together
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            '/images/ira/computer.svg',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <p>Control who can access it</p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                Make your notes public or private. When choosing public, you can
                share the link with your friends&nbsp;
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            '/images/ira/tools.svg',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>Intuitive editor</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                Focus on editing rather than formatting the document. Easy to
                use editor will let you to create your notes real quick
              </p>
            </span>
          ),
        },
      },
    ],
  },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: { className: 'banner2-title', children: 'Take notes online - take Notex' },
        content: {
          className: 'banner2-content',
          children: 'Login, create your notes online in Markdown editor and access it anywhere',
        },
        button: { className: 'banner2-button', children: 'Create an account' },
      },
    ],
  },
};
