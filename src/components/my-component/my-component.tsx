import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: './../tailwind.component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return (
      <div class="bg-indigo-500 p-6 rounded-md flex justify-center">
        <h1 class="text-white font-sans">This is a Stencil component using Tailwind</h1>
      </div>
    );
  }
}
