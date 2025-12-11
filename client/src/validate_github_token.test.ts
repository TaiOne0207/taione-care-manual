import { describe, it, expect } from 'vitest';

describe('GitHub Token Validation', () => {
  it('should be able to authenticate with GitHub API', async () => {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GITHUB_TOKEN is not set');
    }

    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'Manus-Agent'
      }
    });

    if (!response.ok) {
      console.error(`GitHub API Error: ${response.status} ${response.statusText}`);
      const body = await response.text();
      console.error(`Response body: ${body}`);
    }

    expect(response.status).toBe(200);
    const data = await response.json();
    console.log(`Authenticated as: ${data.login}`);
  });
});
