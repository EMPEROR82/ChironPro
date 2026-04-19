# ChironLang VS Code Extension

Official Visual Studio Code extension for **ChironLang**, providing a robust development environment for the Chiron Framework. This extension leverages the **Language Server Protocol (LSP)** to bring modern IDE features to Chiron developers.

---

## 🚀 Features

### **Intelligent Code Editing**
* **Syntax Highlighting:** Full support for keywords, identifiers, operators, and literals via TextMate grammar.
* **Scope-aware Autocompletion:** Context-sensitive suggestions for variables, functions, and parameters available in the current scope.
* **Hover Information:** View function signatures and variable metadata instantly by hovering over symbols.
* **Jump to Definition:** Seamlessly navigate to function or symbol declarations using `Ctrl + Click` or `Cmd + Click`.

### **Validation & Reliability**
* **Live Diagnostics:** Real-time error reporting for parsing and semantic checks displayed directly in the editor.
* **Semantic Error Highlighting:** Automatically detects calls to undefined functions or use of undeclared variables.

### **Developer Experience**
* **Integrated Run Button:** Execute `.tl` files directly from the editor title bar via a dedicated play icon.
    * **Run without variables:** Executes the file with no input parameters.
    * **Run with variables:** Prompts for a Python-style dictionary to pass as input flags.
	* **Run with Webview:** Full support for rendering turtle graphics commands, such as `forward`, `left`, and `right`, within a dedicated VS Code webview
* **Smart Formatting:** Includes automatic bracket closing for `()`, `[]`, and `{}` and intelligent auto-indentation for nested blocks.
* **Comment Support:** Full recognition of inline and block comments to improve code documentation.

---

## 🛠 Language Capabilities

The extension fully supports the latest language extensions implemented in the framework:
* **User-defined Functions:** Supports multiple parameters, return statements, and recursion.
* **Arrays:** Full support for declarations, element assignment, and indexed access.
* **Advanced Operators:** Includes modulo (`%`) and exponentiation (`**`) arithmetic operators.
* **I/O Support:** Integrated `printf` command for debugging and program interaction.

---

## 💻 Architecture

The extension is built on a modular client-server architecture:
* **Client:** A lightweight TypeScript-based VS Code extension.
* **Language Server:** A TypeScript-based server that integrates with the Chiron compiler using ANTLR4.
* **Communication:** Uses JSON-RPC over standard I/O.

---

## 🗺 Roadmap

Planned future enhancements include:
* **Debugger Integration:** Implementing the Debug Adapter Protocol (DAP) for breakpoints and variable inspection.
* **Enhanced Autocompletion:** Support for snippets and improved completion ranking.
* **Error Recovery:** Improving parser resilience to provide better diagnostics for malformed input.

---

## 👥 Authors
* **Dnyanesh Hemendra Shinde** (230390)
* **Nikhilesh Joshi** (230700)
* **Yatharth Dangi** (231197)

**GitHub Repository:** [EMPEROR82/ChironIITK-CS335](https://github.com/EMPEROR82/ChironIITK-CS335)