import React from 'react'
import { resolve } from 'styled-jsx/css'

async function takeTime() {
  await new Promise((resolve) => {
    throw new Error("mannual error");
    setTimeout(resolve, 3000);
  });
}
export default async function page() {
  await takeTime();
  return (
    <div>
      <p>this is about page.</p>
    </div>
  )
}
