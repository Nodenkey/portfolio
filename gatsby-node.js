const path = require("path")

// create dynamic pages!


// grab the markdowns with the onCreateNode function API
module.exports.onCreateNode = ({node, actions}) => {
    // grab createNodeField from the actions
    const {createNodeField} = actions;
    if (node.internal.type === 'MarkdownRemark') {
        // use path function to strip the slug from the path (node docs)
        const slug = path.basename(node.fileAbsolutePath, '.md')

        // create a field for the slug
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}


// use the createPages API to create pages based on the slug

// add async to use the promise the graphql provides

module.exports.createPages = async ({graphql, actions}) => {
    // Grab createPage function from the actions
    const {createPage} = actions;

    // add the path to your blogTemplate
    const blogTemplate = path.resolve('./src/templates/blogTemplate.js');

    //use the graphql provided to query the slug
    const res = await graphql(`
        query {
            allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            tags
                        }
                    }
                }
            }
        }
    `)

    // create the page on each response
    res.data.allMarkdownRemark.edges.forEach((edge, index) => {
        // create the page
        createPage({
            // specify the path to the template
            component: blogTemplate,
            // specify the path you want the page to be on on the server
            path: `/blog/${edge.node.fields.slug}`,
            // specify what you want to pass down each of the page to identify the page
            context: {
                slug: edge.node.fields.slug,
                prev: index === 0 ? null : res.data.allMarkdownRemark.edges[index - 1].node,
                next: index === res.data.allMarkdownRemark.edges.length - 1 ? res.data.allMarkdownRemark.edges[0].node : res.data.allMarkdownRemark.edges[index + 1].node
            }
        })
    })
}
