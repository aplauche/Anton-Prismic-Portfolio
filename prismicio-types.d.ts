// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Categories documents */
type CategoriesDocumentData = Record<string, never>;
/**
 * Categories document from Prismic
 *
 * - **API ID**: `categories`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoriesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoriesDocumentData>,
    "categories",
    Lang
  >;
/** Content for Menu documents */
interface MenuDocumentData {
  /**
   * Slice Zone field in *Menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<MenuDocumentDataSlicesSlice>;
}
/**
 * Slice for *Menu → Slice Zone*
 *
 */
type MenuDocumentDataSlicesSlice = MenuItemSlice;
/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MenuDocumentData>, "menu", Lang>;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | FeaturedProjectSlice
  | StatRowSlice
  | VerticalCardsSlice
  | HeroSlice
  | RichTextSlice
  | CtaBarSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Post documents */
interface PostDocumentData {
  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Post → Slice Zone*
 *
 */
type PostDocumentDataSlicesSlice = StatRowSlice;
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Featured Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  featured_image: prismic.ImageField<never>;
  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Project → Slice Zone*
 *
 */
type ProjectDocumentDataSlicesSlice = StatRowSlice | RichTextSlice;
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;
export type AllDocumentTypes =
  | CategoriesDocument
  | MenuDocument
  | PageDocument
  | PostDocument
  | ProjectDocument;
/**
 * Primary content in CtaBar → Primary
 *
 */
interface CtaBarSliceDefaultPrimary {
  /**
   * Headline field in *CtaBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_bar.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  headline: prismic.KeyTextField;
  /**
   * Description field in *CtaBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_bar.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismic.KeyTextField;
}
/**
 * Item in CtaBar → Items
 *
 */
export interface CtaBarSliceDefaultItem {
  /**
   * Button Text field in *CtaBar → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_bar.items[].button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_text: prismic.KeyTextField;
  /**
   * Button URL field in *CtaBar → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_bar.items[].button_url
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_url: prismic.LinkField;
}
/**
 * Default variation for CtaBar Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaBarSliceDefaultPrimary>,
  Simplify<CtaBarSliceDefaultItem>
>;
/**
 * Slice variation for *CtaBar*
 *
 */
type CtaBarSliceVariation = CtaBarSliceDefault;
/**
 * CtaBar Shared Slice
 *
 * - **API ID**: `cta_bar`
 * - **Description**: `CtaBar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBarSlice = prismic.SharedSlice<"cta_bar", CtaBarSliceVariation>;
/**
 * Primary content in FeaturedProject → Primary
 *
 */
interface FeaturedProjectSliceDefaultPrimary {
  /**
   * Project field in *FeaturedProject → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_project.primary.project
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  project: prismic.ContentRelationshipField<"project">;
}
/**
 * Default variation for FeaturedProject Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturedProjectSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProjectSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *FeaturedProject*
 *
 */
type FeaturedProjectSliceVariation = FeaturedProjectSliceDefault;
/**
 * FeaturedProject Shared Slice
 *
 * - **API ID**: `featured_project`
 * - **Description**: `FeaturedProject`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturedProjectSlice = prismic.SharedSlice<
  "featured_project",
  FeaturedProjectSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Hero Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  hero_image: prismic.ImageField<never>;
  /**
   * Hero Title field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.hero_title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  hero_title: prismic.KeyTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in MenuItem → Primary
 *
 */
interface MenuItemSliceDefaultPrimary {
  /**
   * Text field in *MenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text: prismic.KeyTextField;
  /**
   * Link field in *MenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for MenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MenuItemSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *MenuItem*
 *
 */
type MenuItemSliceVariation = MenuItemSliceDefault;
/**
 * MenuItem Shared Slice
 *
 * - **API ID**: `menu_item`
 * - **Description**: `MenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuItemSlice = prismic.SharedSlice<
  "menu_item",
  MenuItemSliceVariation
>;
/**
 * Primary content in RichText → Primary
 *
 */
interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  content: prismic.RichTextField;
}
/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *RichText*
 *
 */
type RichTextSliceVariation = RichTextSliceDefault;
/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: `RichText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;
/**
 * Item in StatRow → Items
 *
 */
export interface StatRowSliceDefaultItem {
  /**
   * Stat field in *StatRow → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: stat_row.items[].stat
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  stat: prismic.KeyTextField;
  /**
   * Caption field in *StatRow → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: stat_row.items[].caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  caption: prismic.KeyTextField;
}
/**
 * Default variation for StatRow Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StatRowSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<StatRowSliceDefaultItem>
>;
/**
 * Slice variation for *StatRow*
 *
 */
type StatRowSliceVariation = StatRowSliceDefault;
/**
 * StatRow Shared Slice
 *
 * - **API ID**: `stat_row`
 * - **Description**: `StatRow`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StatRowSlice = prismic.SharedSlice<
  "stat_row",
  StatRowSliceVariation
>;
/**
 * Primary content in VerticalCards → Primary
 *
 */
interface VerticalCardsSliceDefaultPrimary {
  /**
   * Title field in *VerticalCards → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vertical_cards.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Description field in *VerticalCards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vertical_cards.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Item in VerticalCards → Items
 *
 */
export interface VerticalCardsSliceDefaultItem {
  /**
   * Title field in *VerticalCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vertical_cards.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Description field in *VerticalCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: vertical_cards.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Default variation for VerticalCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VerticalCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VerticalCardsSliceDefaultPrimary>,
  Simplify<VerticalCardsSliceDefaultItem>
>;
/**
 * Slice variation for *VerticalCards*
 *
 */
type VerticalCardsSliceVariation = VerticalCardsSliceDefault;
/**
 * VerticalCards Shared Slice
 *
 * - **API ID**: `vertical_cards`
 * - **Description**: `VerticalCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VerticalCardsSlice = prismic.SharedSlice<
  "vertical_cards",
  VerticalCardsSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      CategoriesDocumentData,
      CategoriesDocument,
      MenuDocumentData,
      MenuDocumentDataSlicesSlice,
      MenuDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      PostDocumentData,
      PostDocumentDataSlicesSlice,
      PostDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      ProjectDocument,
      AllDocumentTypes,
      CtaBarSliceDefaultPrimary,
      CtaBarSliceDefaultItem,
      CtaBarSliceDefault,
      CtaBarSliceVariation,
      CtaBarSlice,
      FeaturedProjectSliceDefaultPrimary,
      FeaturedProjectSliceDefault,
      FeaturedProjectSliceVariation,
      FeaturedProjectSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      MenuItemSliceDefaultPrimary,
      MenuItemSliceDefault,
      MenuItemSliceVariation,
      MenuItemSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceDefault,
      RichTextSliceVariation,
      RichTextSlice,
      StatRowSliceDefaultItem,
      StatRowSliceDefault,
      StatRowSliceVariation,
      StatRowSlice,
      VerticalCardsSliceDefaultPrimary,
      VerticalCardsSliceDefaultItem,
      VerticalCardsSliceDefault,
      VerticalCardsSliceVariation,
      VerticalCardsSlice,
    };
  }
}
