await import(`./x/${__NAME__}.ts`);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>abc</div>
`;
