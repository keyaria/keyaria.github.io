import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"

export const data = useStaticQuery(graphql`
  query {
 tcSlideImg: file(relativePath: { eq: "tcSlide.png" }) {
   childImageSharp {
              fluid {
       base64
       aspectRatio
       src
       srcSet
       sizes
     }
   }
 }
 cflcImg: file(relativePath: { eq: "CFLC.png" }) {
   childImageSharp {
              fluid {
       base64
       aspectRatio
       src
       srcSet
       sizes
     }
   }
 }
 libImg: file(relativePath: { eq: "lib.png" }) {
   childImageSharp {
              fluid {
       base64
       aspectRatio
       src
       srcSet
       sizes
     }
   }
 }
 cdImg: file(relativePath: { eq: "other.png" }) {
   childImageSharp {
             fluid {
       base64
       aspectRatio
       src
       srcSet
       sizes
     }
   }
 }
 sImg: file(relativePath: { eq: "Desktop@2x.png" }) {
   childImageSharp {
             fluid {
       base64
       aspectRatio
       src
       srcSet
       sizes
     }
   }
 }
}
`)
