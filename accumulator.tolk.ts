export function main(ctx: TolkBuilder) {
  const cnt = ctx.uint("cnt", 0n);

  ctx.external("Raise", (input) => {
    const delta = input.body.uint(32);
    cnt.set(cnt.get() + delta);
  });

  ctx.external("Lower", (input) => {
    const delta = input.body.uint(32);
    cnt.set(cnt.get() - delta);
  });

  ctx.getter("Get", () => {
    return cnt.get();
  });
}
