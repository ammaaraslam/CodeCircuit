import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/palenight";
import rangeParser from "parse-numeric-range";

const calculateLinesToHighlight = raw => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return index => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const copyToClipboard = str => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str);
  }
};

const Code = props => {
  const [isCopied, setIsCopied] = React.useState(false);
  const className = props.children.props.className || "";
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, "");
  const file = props.children.props.file;
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ""
  );

  return (
    <div
      style={{
        background: "var(--color-primaryColor)",
        borderRadius: "0.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        paddingLeft: "1.5rem",
        color: "var(--color-secondaryText)",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            background: "var(--color-secondaryColor)",
            marginRight: "1rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            textTransform: "uppercase",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--color-primaryBackground)"
          }}
        >{`${language}`}</div>
        <div
          style={{
            color: "#9d9d9d",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {file && `${file}`}
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <button
          onClick={() => {
            copyToClipboard(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
          }}
          style={{
            marginRight: "1.5rem",
            marginTop: "0.5rem",
            padding: "8px 12px",
            background: "var(--color-darkerBackground)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "var(--color-primaryText)",
            fontSize: "14px",
            fontFamily: "sans-serif",
            lineHeight: "1",
          }}
        >
          {isCopied ? "🎉 Copied!" : "Copy"}
        </button>
      </div>
      <div
        style={{
          overflow: "auto",
          background: "var(--color-primaryColor)",
          borderRadius: "0.5rem",
        }}
      >
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                backgroundColor: "transparent",
                float: "left",
                minWidth: "100%",
              }}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    background: highlights(i) ? "#00f5c426" : "transparent",
                    display: "block",
                  }}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;