// contentlayer.config.js
import rehypePrism from "@mapbox/rehype-prism";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
var computedFields = {
  url: {
    type: "string",
    resolve: (doc) => {
      const slug = doc._raw.sourceFileName.replace(".mdx", "");
      if (doc.type === "Post" && doc.language) {
        return `/${doc.language}/blog/${slug}`;
      }
      return `/${doc._raw.flattenedPath}`;
    }
  },
  slug: {
    type: "string",
    resolve: (doc) => `${doc._raw.sourceFileName.replace(".mdx", "")}`
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    language: {
      type: "enum",
      options: ["en", "fr"],
      required: true,
      description: "Language of the post (en or fr)"
    },
    category: { type: "string", required: true },
    image: { type: "string", required: true },
    description: { type: "string", required: true },
    timeToRead: { type: "number", required: true },
    // in minutes
    alternates: {
      type: "json",
      required: false,
      description: 'Links to translations (e.g., { en: "slug-en", fr: "slug-fr" })'
    }
  },
  computedFields
}));
var CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: `work/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: {
      type: "list",
      of: { type: "string" }
    },
    thumbnail: { type: "string", required: true },
    coverImage: { type: "string", required: true },
    images: { type: "list", of: { type: "string" } },
    projectURL: { type: "string", required: true },
    description: { type: "string", required: true },
    projectDuration: { type: "string", required: true },
    client: { type: "json", required: true },
    testimonial: { type: "json", required: false }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post, CaseStudy],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism]
  }
});
export {
  CaseStudy,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PJKNYNL4.mjs.map
