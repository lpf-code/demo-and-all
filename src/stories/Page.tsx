import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className='storybook-page'>
        <h2>Pages in Storybook</h2>
        <p>
          我们建议使用{' '}
          <a href='https://componentdriven.org' target='_blank' rel='noopener noreferrer'>
            <strong>组件驱动</strong>
          </a>{' '}
          的流程构建UI，从原子组件开始，以页面结束。
        </p>
        <p>用模拟数据呈现页面。 这使得构建和审查页面状态变得容易，而无需在应用程序中导航到它们。下面是一些在Storybook中管理页面数据的方便模式:</p>
        <ul>
          <li>使用高级的连接组件。 Storybook帮助您从子组件故事的“参数”中组合这些数据。</li>
          <li>从您的服务中组装页面组件中的数据。您可以使用Storybook模拟这些服务。</li>
        </ul>
        <p>
          在
          <a href='https://storybook.js.org/tutorials/' target='_blank' rel='noopener noreferrer'>
            Storybook教程
          </a>
          中获取有关组件驱动开发的指导教程。 在
          <a href='https://storybook.js.org/docs' target='_blank' rel='noopener noreferrer'>
            文档
          </a>
          中阅读更多内容。
        </p>
        <div className='tip-wrapper'>
          <span className='tip'>提示</span>
          使用工具栏中的
          <svg width='10' height='10' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <path
                d='M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z'
                id='a'
                fill='#999'
              />
            </g>
          </svg>
          Viewports插件调整画布的宽度
        </div>
      </section>
    </article>
  );
};
