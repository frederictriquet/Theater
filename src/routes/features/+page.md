# Enhanced Markdown Features

This page demonstrates the enhanced markdown features now available in our SvelteKit application.

## Syntax Highlighting

Here's some TypeScript code with syntax highlighting:

```typescript
interface User {
    id: string;
    name: string;
    email: string;
}

function greetUser(user: User) {
    console.log("Hello, " + user.name + "!");
}
```

Here's some Python code:

```python
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Generate first 10 Fibonacci numbers
fibs = [fibonacci(i) for i in range(10)]
print(fibs)
```

## Syntax Highlighting Test

Let's test the syntax highlighting with different languages:

```typescript
// TypeScript example
interface Config {
    theme: 'light' | 'dark';
    features: string[];
}

const config: Config = {
    theme: 'dark',
    features: ['markdown', 'syntax-highlighting']
};
```

```svelte
<!-- Svelte component example -->
<script lang="ts">
    let count = 0;
    
    function increment() {
        count += 1;
    }
</script>

<button on:click={increment}>
    Clicked {count} times
</button>
```

```css
/* CSS example */
.dark-mode {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
}

.component {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: all 0.2s ease;
}
```

## Typography Features

The @tailwindcss/typography plugin provides beautiful typographic defaults. You can see this in action with:

### Lists
- Nested
  - Items
    - Work
  - Great
- Too!

### Blockquotes

> "The best way to predict the future is to invent it."
> -- Alan Kay

### Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Syntax Highlighting | ✅ | Using Shiki |
| Typography | ✅ | Using Tailwind Typography |
| Smart Punctuation | ✅ | Using SmartyPants |

### Code Inline

You can use `inline code` within paragraphs easily.

## Smart Punctuation

Notice how "quotes" and apostrophes' are automatically made typographically correct, and how -- becomes an em-dash!
