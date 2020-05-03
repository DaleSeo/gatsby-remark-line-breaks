import Remark from "remark";
import toHAST from "mdast-util-to-hast";
import hastToHTML from "hast-util-to-html";

import { setParserPlugins } from "./";

describe("gatsby-remark-line-breaks", () => {
  test("A line break is parsed as a hard line break.", () => {
    const remark = new Remark();
    setParserPlugins().forEach((parserPlugins) => remark.use(parserPlugins));

    const mdText = "foo\nbaz";
    const mdAst = remark.parse(mdText);
    const htmlAst = toHAST(mdAst, { allowDangerousHtml: true });
    const htmlText = hastToHTML(htmlAst, { allowDangerousHtml: true });

    expect(htmlText).toEqual("<p>foo<br>\nbaz</p>");
  });

  test("Two or more spaces is still parsed as a hard line break.", () => {
    const remark = new Remark();
    setParserPlugins().forEach((parserPlugins) => remark.use(parserPlugins));

    const mdText = "foo  \nbaz";
    const mdAst = remark.parse(mdText);
    const htmlAst = toHAST(mdAst, { allowDangerousHtml: true });
    const htmlText = hastToHTML(htmlAst, { allowDangerousHtml: true });

    console.log(htmlText);
    expect(htmlText).toEqual("<p>foo<br>\nbaz</p>");
  });
});
