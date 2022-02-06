import React from "react";

function ProductsList() {
  return (
    <>
      <div class="uk-child-width-expand@s uk-text-center uk-flex" uk-grid>
        <div>
          <div class="uk-card uk-card-default uk-card-hover ">
            <div class="uk-card-media-top">
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280"
                alt=""
              />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">Media Top</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-hover uk-margin-left">
            <div class="uk-card-media-top">
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280"
                alt=""
              />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">Media Top</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-hover uk-margin-left">
            <div class="uk-card-media-top">
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=280"
                alt=""
              />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">Media Top</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
