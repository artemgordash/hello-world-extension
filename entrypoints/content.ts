export default defineContentScript({
  matches: ['*'],
  main() {
    document.body.innerHTML = 'Hello world';
  },
});
