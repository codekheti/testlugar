import React, { useState, useEffect } from "react";
const query = `
{
    propertyCollection(limit:6) {
        items {
          id
          title
          address
          category   
          image {
            url
          }
        }
      }
}
`;
function Properties() {

  const [property, setProperty] = useState(null);

//   const [category, setCategory] = useState(null); This is used to get the property l ist according to the categories. I need little more time to display this.


  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setProperty(data.propertyCollection.items);
          });
  }, []);

  if (!property) {
    return "Loading...";
  }

//   console.log(property);

  return (
    <section className="properties" aria-label="Properties">
      <div className="container">
        <h2>Properties</h2>
        <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
        <div className="filter-properties" aria-label="Filter Properties">

        </div>
        <div className="row">
          {property.map((item, i) => {
            return (
              <div key={i} className="col-md-4 col-6 property-card">
                <img
                  src={item.image.url}
                  className="property-card-image"
                  alt={item.title}
                  aria-label={item.title}
                />
                <div className="property-card-copy">
                  <h4 className="property-card-title">{item.title}</h4>
                  <p className="property-card-address">{item.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Properties;
