# use-intersection-observer

> easy to use hook for intersection observers

[![NPM](https://img.shields.io/npm/v/react-intersection-observer-hooks.svg?style=for-the-badge)](https://www.npmjs.com/package/use-intersection-observer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge)](https://standardjs.com)

## Install

```bash
npm i use-intersection-observer
```

## Usage

```tsx
import * as React from "react";

import { useIntersectionObserver } from "use-intersection-observer";

const Example = () => {
	const { observe } = useIntersectionObserver(entries => {
		for (const entry of entries) {
			// do stuff with each entry
		}
	});

	return (
		<div>
			<ul>
				<li ref={observe}></li>
				<li ref={observe}></li>
				<li ref={observe}></li>
			</ul>
		</div>
	);
};
```

## License

MIT © [GypsyDangerous](https://github.com/GypsyDangerous)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
