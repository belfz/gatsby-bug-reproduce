import type { GatsbyNode } from "gatsby";
import { langs } from "./common-config";
import path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] =
  async ({ actions }) => {
    const createNonPrismicDependentPageWithLangParam = (
      pageName: string,
      lang: string
    ) =>
      actions.createPage({
        path: `/${pageName}/${lang}`,
        component: path.resolve(`src/non-cms-pages/${pageName}.tsx`),
        context: {
          lang,
        },
      });

    langs.forEach((lang) => {
      createNonPrismicDependentPageWithLangParam(`learn-more`, lang);
    });
  };
