import React, { useContext } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
import appContext from "../context/context";

function SEO({ description, lang, meta, keywords, pageTitle, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.site && data.site.description) || "";
        const siteTitle = (data.site && data.site.title) || "";
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || "";
        const metaImage =
          image && image.asset
            ? imageUrlFor(buildImageObj(image))
                .width(1200)
                .url()
            : "";
        const fullTitle = pageTitle ? `${siteTitle} - ${pageTitle}` : siteTitle;
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={fullTitle}
            titleTemplate={fullTitle === siteTitle ? "%s" : `%s | ${siteTitle}`}
            meta={[
              {
                name: "description",
                content: metaDescription
              },
              {
                property: "og:title",
                content: fullTitle
              },
              {
                property: "og:description",
                content: metaDescription
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                property: "og:image",
                content: metaImage
              },
              {
                name: "twitter:card",
                content: "summary"
              },
              {
                name: "twitter:creator",
                content: siteAuthor
              },
              {
                name: "twitter:title",
                content: fullTitle
              },
              {
                name: "twitter:description",
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", ")
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pagetitle: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`;
