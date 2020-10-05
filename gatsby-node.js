/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `    
	union relatedParagraphUnion = 
      paragraph__program_variants
      | paragraph__general_text
	
	union relatedTaxonomyUnion =
      taxonomy_term__tags
      | taxonomy_term__specializations
      | taxonomy_term__programs
      | taxonomy_term__degrees
      | taxonomy_term__units
	
	interface TaxonomyInterface @nodeInterface {
      id: ID!
      drupal_id: String
      name: String
    }	

	type BodyField {
      processed: String
      value: String
      format: String
      summary: String
    }
    type BodyFieldWithSummary {
      processed: String
      value: String
      format: String
      summary: String
    }
	
	type FieldLink {
      title: String
      uri: String
    }
	type FieldsPathAlias {
      alias: PathAlias @link
    }
	
	type ImageField implements Node {
      alt: String
    }
	
	type InstaNode implements Node {
      original: String
      caption: String
    }

	type media__image implements Node {
      drupal_id: String
      name: String
      field_media_image: ImageField
      fields: media__imageFields
      relationships: media__imageRelationships
    }
    type media__imageFields implements Node {
      tags: [String]
    }
    type media__imageRelationships implements Node {
      field_media_image: file__file @link(from: "field_media_image___NODE")
      field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
    }

	type node__call_to_action implements Node {
      drupal_id: String
      drupal_internal__tid: Int
      title: String
      field_call_to_action_link: FieldLink
      relationships: node__call_to_actionRelationships
      fields: node__call_to_actionFields
    }
    type node__call_to_actionFields implements Node {
      tags: [String]
    }
    type node__call_to_actionRelationships implements Node {
      field_call_to_action_goal: taxonomy_term__goals @link(from: "field_call_to_action_goal___NODE")
      field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
    }
	type node__career implements Node {
      drupal_id: String
      drupal_internal__tid: Int
      title: String
      changed: Date @dateformat
      body: BodyFieldWithSummary
      relationships: node__careerRelationships
      fields: node__careerFields
    }
	type node__careerFields implements Node {
      tags: [String]
    }
    type node__careerRelationships implements Node {
      field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
    }
    type node__course implements Node {
      drupal_id: String
      drupal_internal__tid: Int
      title: String
      field_code: String
      field_course_url: node__courseField_course_url
      field_credits: String
      field_level: Int
      relationships: node__courseRelationships
      fields: node__courseFields
    }
    type node__courseFields implements Node {
      tags: [String]
    }
    type node__courseField_course_url implements Node {
      uri: String
    }
    type node__courseRelationships implements Node {
      field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
    }
	type node__employer implements Node {
      drupal_id: String
      drupal_internal__tid: Int
      title: String
      field_employer_summary: BodyField
      field_image: ImageField
      field_link: FieldLink
      relationships: node__employerRelationships
      fields: node__employerFields
    }
    type node__employerFields implements Node {
      tags: [String]
    }
    type node__employerRelationships {
      field_image: file__file @link(from: "field_image___NODE")
      field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
    }
    type node__page implements Node {
      drupal_id: String
      drupal_internal__nid: Int
      body: BodyFieldWithSummary
      relationships: node__pageRelationships
      fields: FieldsPathAlias
    }
    type node__pageRelationships implements Node {
      field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
    }
    type node__program implements Node {
      drupal_id: String
      drupal_internal__nid: Int
      title: String
      changed: Date @dateformat
      field_course_notes: node__programField_course_notes
      field_program_overview: node__programField_program_overview
      relationships: node__programRelationships
      fields: FieldsPathAlias
    }
    type node__programField_course_notes implements Node {
      value: String
      format: String
      processed: String
    }
    type node__programField_program_overview implements Node {
      value: String
      format: String
      processed: String		
    }	
    type node__programRelationships implements Node {
      field_program_acronym: taxonomy_term__programs @link(from: "field_program_acronym___NODE")
      field_courses: [node__course] @link(from: "field_courses___NODE")
      field_degrees: [taxonomy_term__degrees] @link(from: "field_degrees___NODE")
      field_program_statistics: [paragraph__program_statistic] @link(from: "field_program_statistics___NODE")
      field_program_variants: [relatedParagraphUnion] @link(from: "field_program_variants___NODE")
      field_specializations: [taxonomy_term__specializations] @link(from: "field_specializations___NODE")
      field_tags: [taxonomy_term__tags] @link(from: "field_tags___NODE")
    }
    type node__testimonial implements Node {
        drupal_id: String
        drupal_internal__tid: Int
        title: String
        body: BodyFieldWithSummary
        field_testimonial_person_desc: String
        field_image: ImageField
        relationships: node__testimonialRelationships
        fields: node__testimonialFields
    }
    type node__testimonialFields implements Node {
      tags: [String]
    }
    type node__testimonialRelationships {
      field_image: file__file @link(from: "field_image___NODE")
      field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
    }
	type node__video implements Node {
	  drupal_id: String
	  title: String
	  field_video_url: String
	  relationships: node__videoRelationships
	  fields: node__videoFields
	}
	type node__videoFields implements Node {
      tags: [String]
    }
	type node__videoRelationships implements Node {
	  field_tags: [relatedTaxonomyUnion] @link(from: "field_tags___NODE")
	}

	type paragraph__general_text implements Node {
      drupal_id: String
      field_general_text: BodyField
    }
	type paragraph__program_statistic implements Node {
	  drupal_id: String	  
	  field_stat_range: Boolean
	  field_stat_value: String
	  field_stat_value_end: String
	  relationships: paragraph__program_statisticRelationships
	}
	type paragraph__program_statisticRelationships implements Node {
	  field_stat_icon: media__image @link(from: "field_stat_icon___NODE")
	  field_stat_type: taxonomy_term__statistic_type @link(from: "field_stat_type___NODE")  
	}
    type paragraph__program_variants implements Node {
      drupal_id: String
      field_variant_title: String
      field_variant_link: FieldLink
      field_variant_info: BodyField
      relationships: paragraph__program_variantsRelationships
    }
    type paragraph__program_variantsRelationships {
      field_variant_name: taxonomy_term__program_variant_type
      field_variant_type: taxonomy_term__program_variant_type @link(from: "field_variant_type___NODE")
    }	
	
    type PathAlias implements Node {
      value: String
      alias: String
    }

    type taxonomy_term__degrees implements Node & TaxonomyInterface {
      drupal_id: String
      drupal_internal__tid: Int
      field_degree_acronym: String
      name: String
      description: TaxonomyDescription
    }
    type taxonomy_term__goals implements Node & TaxonomyInterface {
      drupal_id: String
      drupal_internal__tid: Int
      name: String
      field_goal_action: String
    }
    type taxonomy_term__programs implements Node & TaxonomyInterface {
      drupal_id: String
      drupal_internal__tid: Int
      name: String
    }
    type taxonomy_term__programsRelationships {
      field_degrees: [taxonomy_term__degrees] @link(from: "field_degrees___NODE")
      field_specializations: [taxonomy_term__specializations]
      field_program_variants: [relatedParagraphUnion] @link(from: "field_program_variants___NODE")
      field_tags: [taxonomy_term__tags]
    }
    type taxonomy_term__program_variant_type implements Node {
      name: String
    }
    type taxonomy_term__specializations implements Node & TaxonomyInterface {
      drupal_id: String
      drupal_internal__tid: Int
      field_specialization_acronym: String
      name: String
      relationships: taxonomy_term__specializationsRelationships
      description: TaxonomyDescription
    }
    type taxonomy_term__specializationsRelationships {
      field_units: [taxonomy_term__units]
    }
    type taxonomy_term__statistic_type implements Node & TaxonomyInterface {
      drupal_id: String
      drupal_internal__tid: Int
      name: String
    }
    type taxonomy_term__tags implements Node & TaxonomyInterface {
      drupal_id: String
      drupal_internal__tid: Int
      name: String
      description: TaxonomyDescription
    }
    type taxonomy_term__units implements Node & TaxonomyInterface {
      drupal_id: String
      drupal_internal__tid: Int
      field_unit_acronym: String
      name: String
      description: TaxonomyDescription
    }

    type TaxonomyDescription {
      processed: String
      value: String
      format: String
    }
  `
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, createNodeId, actions }) => {
  const { createNodeField } = actions

  // Handle nodes that point to multiple tag vocabularies
  if (node.internal.type === `media__image` || 
	  node.internal.type === `node__call_to_action` ||
      node.internal.type === `node__career` || 
	  node.internal.type === `node__course` ||
	  node.internal.type === `node__employer` ||
	  node.internal.type === `node__testimonial` ||      
      node.internal.type === `node__video`) {
    createNodeField({
      node,
      name: `tags`,
      value: node.relationships.field_tags___NODE,
    })
  }

  // Handle nodes that require page aliases
  if (node.internal.type === `node__page` || 
      node.internal.type === `node__program`) {
        
    /* Create page path */
    const aliasID = createNodeId(`alias-${node.drupal_id}`);

    // add  mapped alias node as a field
    createNodeField({
      node,
      name: "alias",
      value: aliasID,
    })

    /* Set content field for search */
    /*    - return body of content */
    if (typeof node.body !== 'undefined' && node.body !== null) {
        content = `${node.body.processed}`
    }
    /*    - return description of taxonomy */
    else if (typeof node.description !== 'undefined' && node.description !== null) {
        content = `${node.description.processed}`
    }
    /*    - set default content */
    else {
        content = ''
    }
    createNodeField({
        node,
        name: `content`,
        value: content,
    })
  }
}

exports.createPages = async ({ graphql, actions, createContentDigest, createNodeId, reporter }) => {
  const pageTemplate = path.resolve('./src/templates/basic-page.js');
  const programTemplate = path.resolve('src/templates/program-page.js');
  const helpers = Object.assign({}, actions, {
    createContentDigest,
    createNodeId,
  })

  const result = await graphql(`
    {
      pages: allNodePage {
        edges {
          node {
            id
            drupal_id
            title
          }
        }
      }
      programs: allNodeProgram {
        edges {
          node {
            title
            id
            drupal_id
            relationships {
              field_program_acronym {
                id
                name
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  if (result.data !== undefined){

    // process page nodes
    if(result.data.pages !== undefined){
      const pages = result.data.pages.edges;
      pages.forEach(( { node }, index) => {
        processPage(node, 
          node.id, 
          createPageAlias, 
          pageTemplate, 
          helpers);
      })
    }

    // process program nodes
    if(result.data.programs !== undefined){
      const programs = result.data.programs.edges;
      programs.forEach(( { node }, index) => {
        processPage(
          node, 
          node.relationships.field_program_acronym.id, 
          createProgramAlias, 
          programTemplate, 
          helpers);
      })
    }
  }
}

function processPage(node, contextID, functionToRetrieveAlias, template, helpers) {
    let alias = functionToRetrieveAlias(node);
    createNodeAlias(node, alias, helpers);

    helpers.createPage({
      path: alias,
      component: template,
      context: {
        id: contextID,
      },
    })
}

function createNodeAlias(node, alias, helpers){
  const aliasID = helpers.createNodeId(`alias-${node.drupal_id}`);
  const aliasData = {
    key: aliasID,
    value: alias,
  }
  const aliasContent = JSON.stringify(aliasData);
  const aliasMeta = {
    id: aliasID,
    parent: null,
    children: [],
    internal: {
      type: `PathAlias`,
      mediaType: `text/html`,
      content: aliasContent,
      contentDigest: helpers.createContentDigest(aliasData)
    }
  }

  const aliasNode = Object.assign({}, aliasData, aliasMeta);
  helpers.createNode(aliasNode);
}

function createPageAlias(node){
  var alias = `/` + slugify(node.title);
  return alias;
}

function createProgramAlias(node){
  var alias = `/programs/` + slugify(node.title);
  return alias;
}

// Source: https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}