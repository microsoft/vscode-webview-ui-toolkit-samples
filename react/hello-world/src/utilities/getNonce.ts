/**
 * A helper function that will generate a cryptographic "nonce" (aka a random
 * or semi-random number/string).
 *
 * @remarks This nonce can be used along with `nonce` attribute of `<script>`
 * tags and a content security policy to ensure that only scripts with a
 * nonce can be executed inside a webview.
 *
 * @returns A cryptographic nonce string
 */
export function getNonce() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
