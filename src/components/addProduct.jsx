import React, { Component, useState } from "react";
import Joi from "joi-browser";

const AddProduct = props => {
  // const [state, setState] = useState({
  //   product: {
  //     name: "",
  //     description: "",
  //     price: 0,
  //     discount: 0,
  //     Category: ""
  //   },
  //   errors: {}
  // });

  const [product, setProduct] = useState({
    data: [
      {
        title: "",
        description: ""
      }
    ],
    imageUrls: ["/assets/product-grey-1.jpg"],
    price: 0,
    discount: 0,
    CategoryId: null,
    isInCart: false
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object().keys({
    data: Joi.array().items({
      title: Joi.string().required(),
      description: Joi.string().required()
    }),
    imageUrls: Joi.array().items(Joi.string()),
    price: Joi.number()
      .min(1)
      .required(),
    discount: Joi.number(),
    CategoryId: Joi.required(),
    isInCart: Joi.boolean()
  });

  const handleChange = ({ target }) => {
    //Clone
    const Newproduct = { ...product };
    //Edit
    Newproduct[target.id] = target.value;
    //SetState
    setProduct(Newproduct);
  };

  const handleChangeData = ({ target }) => {
    //Clone
    const Newproduct = { ...product };
    //Edit
    const res = target.id.split(".");
    Newproduct[res[0]][res[1]][res[2]] = target.value;
    //SetState
    setProduct(Newproduct);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("product", product);

    //Validation
    const reserrors = validate();
    console.log("reserrors : ", reserrors);
    if (reserrors) {
      setErrors(reserrors);
      return;
    }

    setErrors({});

    //call backEnd to Add Product
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => console.log("data ", data));
  };

  const handleChangeCategor = e => {
    let { name, value } = e.target;
    const Newproduct = { ...product };
    Newproduct[name] = value;
    setProduct(Newproduct);
  };
  const validate = () => {
    const result = Joi.validate(product, schema, {
      abortEarly: false
    });
    // const error = {};
    if (result.error === null) {
      return null;
    }
    //Errors
    const errors = {};
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }
    return errors;
  };

  return (
    <React.Fragment>
      <form className="add-product" onSubmit={handleSubmit}>
        <div className="add-product__images slider">
          <div className="add-product__image-actions">
            <div className="add-product__image-action">
              <a href="/">
                <i className="fas fa-plus-square" />
              </a>
              <a href="/">
                <i className="fas fa-edit" />
              </a>
              <a href="/">
                <i className="fas fa-trash-alt" />
              </a>
            </div>
          </div>
          <div className="slider__items">
            <div
              className="slider__item active"
              style={{
                backgroundImage: "url(" + product.imageUrls[0] + ")"
              }}
            />
            <div
              className="slider__item"
              style={{
                backgroundImage: "url(img/products/product-grey-7.jpg)"
              }}
            />
            <div
              className="slider__item"
              style={{
                backgroundImage: "url(img/products/product-grey-7.jpg)"
              }}
            />
          </div>
          <div className="slider__indicators">
            <span className="slider__indicator active" />
            <span className="slider__indicator" />
            <span className="slider__indicator" />
          </div>
        </div>
        <div className="add-product__data">
          <div className="form-controls">
            <section className="tabs">
              <div className="tabs__headers">
                <div className="tabs__header active">English</div>
                <div className="tabs__header">Arabic</div>
              </div>
              <div className="tabs__bodies">
                <div className="tabs__body active">
                  <div className="form-group invalid">
                    <label htmlFor="data.0.title">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="data.0.title"
                      value={product.data[0].title}
                      onChange={handleChangeData}
                      id="data.0.title"
                    />
                    {errors.name && (
                      <div className="alert alert-danger">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="data.0.description">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      id="data.0.description"
                      value={product.data[0].description}
                      onChange={handleChangeData}
                      cols={30}
                      rows={4}
                    />

                    {errors.description && (
                      <div className="alert alert-danger">
                        {errors.description}
                      </div>
                    )}
                  </div>
                </div>
                <div className="tabs__body ">
                  <div className="form-group invalid">
                    <label htmlFor="">Name</label>
                    <input className="form-control" type="text" name id />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Description</label>
                    <textarea
                      className="form-control"
                      name
                      id
                      cols={30}
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                className="form-control"
                type="number"
                name="price"
                id="price"
                value={product.price}
                onChange={handleChange}
              />
              {errors.price && (
                <div className="alert alert-danger">{errors.price}</div>
              )}
            </div>
            <div className="add-product__discount">
              <div className="form-group">
                <label htmlFor>Satus</label>
                <div className="form-group__radios">
                  <div className="form-group__radio">
                    <input type="radio" name id />
                    <span>On Sale</span>
                  </div>
                  <div className="form-group__radio">
                    <input type="radio" name id />
                    <span>Not On Sale</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="discount">Discount</label>
                <input
                  className="form-control"
                  type="number"
                  name="discount"
                  id="discount"
                  value={product.discount}
                  onChange={handleChange}
                />

                {errors.discount && (
                  <div className="alert alert-danger">{errors.discount}</div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Payment Types</label>
              <div className="form-group__checkboxs">
                <div className="form-group__checkbox">
                  <input type="checkbox" name id />
                  <span>Direct Bank Transfare</span>
                </div>
                <div className="form-group__checkbox">
                  <input type="checkbox" name id />
                  <span>Cheque Payment</span>
                </div>
                <div className="form-group__checkbox">
                  <input type="checkbox" name id />
                  <span>Paypal</span>
                </div>
                <div className="form-group__checkbox">
                  <input type="checkbox" name id />
                  <span>Visa</span>
                </div>
                <div className="form-group__checkbox">
                  <input type="checkbox" name id />
                  <span>Mastercard</span>
                </div>
                <div className="form-group__checkbox">
                  <input type="checkbox" name id />
                  <span>On Dilivery</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Category">Category</label>
              <select
                className="form-control"
                name="CategoryId"
                value={product.CategoryId}
                onChange={handleChangeCategor}
                id="Category"
              >
                {props.Categories.map(Category => (
                  <option key={Category.id} value={Category.id}>
                    {Category.name}
                  </option>
                ))}
              </select>
              {errors.Category && (
                <div className="alert alert-danger">{errors.Category}</div>
              )}
            </div>

            <div className="taged-textbox form-group">
              <label className="taged-textbox__lable" htmlFor>
                Tags
              </label>
              <div className="taged-textbox__data">
                <div className="taged-textbox__tags">
                  <div className="taged-textbox__tag">
                    <span>tag1</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag2</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag3</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag4</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag5</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag6</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag7</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag8</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag9</span>
                    <a href="/" className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <div className="taged-textbox__tag">
                    <span>tag10</span>
                    <a className="taged-textbox__remove">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                </div>
                <div className="taged-textbox__clear">
                  <a href="/">
                    <i className="fas fa-times" />
                  </a>
                </div>
              </div>
              <input
                className="taged-textbox__textbox form-control"
                type="text"
                name
                id
              />
            </div>
            <div className="add-product__actions">
              <button className="btn btn--gray">Cancel</button>
              <button type="submit" className="btn btn--primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddProduct;
