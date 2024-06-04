import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import {LocalizedStringProvider} from 'react-aria-components/i18n';

export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale}>
      <Head />
      <body>
        <Main />
        <LocalizedStringProvider locale={props.locale!} />
        <NextScript />
      </body>
    </Html>
  );
}