import React from "react";
import blog1 from "../images/download/blog-1.jpg";
import blog2 from "../images/download/blog-2.jpg";
import blog3 from "../images/download/blog-3.jpg";
import blog4 from "../images/download/blog-4.jpg";
import blog5 from "../images/download/blog-5.jpg";

function Download() {
  return (
    <>
      <section className="section blog" id="blog">
        <div className="container">
          <h2 className="h2 section-title">Our Blog</h2>

          <ul className="blog-list has-scrollbar">
            {/* Blog 1 */}
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/blog/1">
                    <img
                      src={blog1}
                      alt="Opening of new offices of the company"
                      loading="lazy"
                      className="w-100"
                    />
                  </a>

                  <a href="/blog/1" className="btn card-badge">
                    Read More
                  </a>
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="/blog/1">Opening of new offices of the company</a>
                  </h3>

                  <div className="card-meta">
                    <div className="publish-date">
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="2024-01-14">January 14, 2024</time>
                    </div>

                    <div className="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      <data value="114">114</data>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Blog 2 */}
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/blog/2">
                    <img
                      src={blog2}
                      alt="What cars are most vulnerable"
                      loading="lazy"
                      className="w-100"
                    />
                  </a>

                  <a href="/blog/2" className="btn card-badge">
                    Read More
                  </a>
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="/blog/2">What cars are most vulnerable</a>
                  </h3>

                  <div className="card-meta">
                    <div className="publish-date">
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="2024-01-14">January 14, 2024</time>
                    </div>

                    <div className="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      <data value="114">114</data>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Blog 3 */}
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/blog/3">
                    <img
                      src={blog3}
                      alt="Statistics showed which average age"
                      loading="lazy"
                      className="w-100"
                    />
                  </a>

                  <a href="/blog/3" className="btn card-badge">
                    Read More
                  </a>
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="/blog/3">
                      Statistics showed which average age
                    </a>
                  </h3>

                  <div className="card-meta">
                    <div className="publish-date">
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="2024-01-14">January 14, 2024</time>
                    </div>

                    <div className="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      <data value="114">114</data>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Blog 4 */}
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/blog/4">
                    <img
                      src={blog4}
                      alt="What’s required when renting a car?"
                      loading="lazy"
                      className="w-100"
                    />
                  </a>

                  <a href="/blog/4" className="btn card-badge">
                    Read More
                  </a>
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="/blog/4">
                      What’s required when renting a car?
                    </a>
                  </h3>

                  <div className="card-meta">
                    <div className="publish-date">
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="2024-01-14">January 14, 2024</time>
                    </div>

                    <div className="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      <data value="114">114</data>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Blog 5 */}
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/blog/5">
                    <img
                      src={blog5}
                      alt="New rules for handling our cars"
                      loading="lazy"
                      className="w-100"
                    />
                  </a>

                  <a href="/blog/5" className="btn card-badge">
                    Read More
                  </a>
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="/blog/5">New rules for handling our cars</a>
                  </h3>

                  <div className="card-meta">
                    <div className="publish-date">
                      <ion-icon name="time-outline"></ion-icon>
                      <time dateTime="2024-01-14">January 14, 2024</time>
                    </div>

                    <div className="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      <data value="114">114</data>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Download;
