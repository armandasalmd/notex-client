import React from "react";

const TextRendering = () => {
    return (
        <div>
            <p>Next.js is a very successful web framework that brings together server side rendering and static site generation. SSG speeds up your website thanks to CDN caching meanwhile SSR helps you with SEO and dynamic data.</p>
            <br />
            <p>Server side rendering is a great feature that helps you to write fullstack applications. But if you are not careful, the performance of your Next.js website can be affected easily. In this blog post, I will explain how to leverage Redis to speed up your Next.js API calls. Before that, I will briefly mention a simpler way to improve your performance.</p>
            <br />
            <h1>Use SWR on your API calls</h1>
            <br />
            <p>SWR is a very smart data fetching library. It uses the HTTP cache invalidation strategy (stale-while-revalidate) described by HTTP RFC 5861. When you call an API with SWR, it instantly returns the cached data but asynchronously it fetches the current data and updates your UI. You can also set refreshInterval depending on your tolerance to staleness.</p>
            <br />
            <p>In the above code, user API will be refreshed every 2 seconds.</p>
            <br />
            <h1>Caching with Redis</h1>
            <br />
            <p>SWR is very simple and effective. But there are cases you will need a server side caching:</p>
            <br />
            <pre>var a = console.log(2) + null;</pre>
            <br />
            <ul>
                <li>Client side caching improves the performance for the clients. But if the number of clients is high, you can experience high load on the server side resources which will eventually affect the client side performance too.</li>
                <li>If you are consuming an external API with a quota, you will want to control the API usage on the server side. Otherwise, too many clients will consume the API quickly.</li>
            </ul>
            <p>Next.js is a very successful web framework that brings together server side rendering and static site generation. SSG speeds up your website thanks to CDN caching meanwhile SSR helps you with SEO and dynamic data.</p>
            <br />
            <p>Server side rendering is a great feature that helps you to write fullstack applications. But if you are not careful, the performance of your Next.js website can be affected easily. In this blog post, I will explain how to leverage Redis to speed up your Next.js API calls. Before that, I will briefly mention a simpler way to improve your performance.</p>
            <br />
            <h1>Use SWR on your API calls</h1>
            <br />
            <p>SWR is a very smart data fetching library. It uses the HTTP cache invalidation strategy (stale-while-revalidate) described by HTTP RFC 5861. When you call an API with SWR, it instantly returns the cached data but asynchronously it fetches the current data and updates your UI. You can also set refreshInterval depending on your tolerance to staleness.</p>
            <br />
            <p>In the above code, user API will be refreshed every 2 seconds.</p>
            <br />
            <h1>Caching with Redis</h1>
            <br />
            <p>SWR is very simple and effective. But there are cases you will need a server side caching:</p>
            <br />
            <pre>var a = console.log(2) + null;</pre>
            <br />
            <ul>
                <li>Client side caching improves the performance for the clients. But if the number of clients is high, you can experience high load on the server side resources which will eventually affect the client side performance too.</li>
                <li>If you are consuming an external API with a quota, you will want to control the API usage on the server side. Otherwise, too many clients will consume the API quickly.</li>
            </ul>
        </div>
    );
};

export default TextRendering;
