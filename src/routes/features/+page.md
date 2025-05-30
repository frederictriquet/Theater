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
