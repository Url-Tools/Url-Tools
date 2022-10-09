import { ParamsMap} from './params';

/**
 * This is the description of the interface
 *
 * @interface UrlMergeConfig
 * @prop {string} path - label is used for whatever reason
 * @field {string} prop is used for other reason
 */
export type UrlMergeConfig = {
  /**
   * A URL template that contains zero or more :params
   */
  baseTemplate?: string
  /**
   * The first part of the URL
   */
  baseUrl?: string,
  /**
   * The second part of the URL
   */
  path?: string;
  pathTemplate?: string;
  /**
   * Object with properties that correspond to the :params in the base template. Unused properties become query params.
   */
  params?: ParamsMap;
}
