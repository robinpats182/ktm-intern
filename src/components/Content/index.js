const Content = () => {
  return (
    <>
      <div className="content_wrapper1">
        {/* container 1 */}
        <div className="container_1 df-center">
          <button type="button" className="subscribe_btn">
            Suscribe
          </button>
          <div>
            {" "}
            <img
              className="imgtop"
              src="https://images.unsplash.com/photo-1632973039410-aa5cd16908bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="new"
            />
          </div>
          <div className="banner_text">
            <p>
              <span className="branding mb-2">_______________ </span>
              <span className="branding">BRANDING STUDIO</span>
              <br />
              <span>STRATEGIC</span>
              <br />
              <span>Marketing + Design</span>
              <br />
              <span>for the BRAVE ones</span>
            </p>
          </div>
        </div>

        {/* container 2 */}
        <div className="container_2 df-center">
          <div className="container_2_wrapper ">
            <div className="offer_text">
              <h1 className="df-center">Offerings</h1>
              <p className="df-center">
                I'm baby waistcoat distillery cray gastropub. Health goth
                whatever distillery knausgaard, enamel pin readymade tacos
                scenester kale chips cred.
              </p>
            </div>
            <div className="box-wrap df-center">
              <div className="help_div">
                <p>HOW CAN WE HELP ??</p>
              </div>
              <button className="viewall">VIEW ALL SERVICES</button>
              <div className="box">
                <div>
                  <h4>01</h4>
                  <h5>Custom Branding</h5>
                  <p>
                    I'm baby waistcoat distillery cray gastropub. Health goth
                    whatever distillery knausgaard, enamel pin readymade tacos
                    scenester kale chips cred.
                  </p>
                </div>
              </div>
              <div className="box">
                <div>
                  <h4>02</h4>
                  <h5> Semi-Brands</h5>
                  <p>
                    I'm baby waistcoat distillery cray gastropub. Health goth
                    whatever distillery knausgaard, enamel pin readymade tacos
                    scenester kale chips cred.
                  </p>
                </div>
              </div>
              <div className="box">
                <div>
                  <h4>03</h4>
                  <h5>WEB DESIGN</h5>
                  <p>
                    I'm baby waistcoat distillery cray gastropub. Health goth
                    whatever distillery knausgaard, enamel pin readymade tacos
                    scenester kale chips cred.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}

      <div>
        <div className="content_wrapper2">
          <div className="second_container df-center">
            <div className="bg_design"></div>
            {/* <div><h5>Hi, Iam Jennifer| Founder . Designer</h5></div> */}
            <div>
              {" "}
              <img
                className="img1"
                src="https://images.unsplash.com/photo-1523297467724-f6758d7124c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80"
                alt="new"
              />
            </div>
            <div>
              <div className="meet_design">
                <h2>Meet the design</h2>
                <p>
                  Scenester williamsburg small batch viral typewriter blog,
                  schlitz skateboard squid XOXO four loko. Hoodie intelligentsia
                  affogato, salvia photo booth literally snackwave four dollar
                  toast coloring book typewriter lumbersexual cardigan. Brunch
                  cornhole small batch poutine asymmetrical mixtape. Cardigan
                  hell of pour-over chambray seitan kombucha quinoa next level
                  before they sold out godard af.
                </p>
              </div>
              <button className="learn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* third part */}
      <div>
        <div className="content_wrapper3 ">
          <div className="third_container df-center">
            <div>
              <div className="working_text">
                <h1>
                  My approach is WORKING with holistic brands and creating
                  STRATEGIC results targeted to your dream clients.
                </h1>
              </div>
              <button className="learn_1">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* fouth part */}
      <div>
        <div className="content_wrapper4 df-center">
          <div className="fourth_container df-center">
            <div className="kindword_div">
              <p>Kind Words</p>
            </div>
            <div>
              {" "}
              <img
                className="img3"
                src="https://images.unsplash.com/photo-1602077422495-c8733eb58c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="new"
              />
            </div>
            <div>
              <div className="kind_text">
                <p>
                  has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of very good
                  products.
                </p>
                <h5>DREAM CLIENT | CEO OF AN AWSOME COMPANY |</h5>
              </div>
              <button className="kindbtn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* fifth part */}
      {/* <div>
        <div className="content_wrapper5 ">
          <div className="fifth_container df-center">
            <div></div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Content;