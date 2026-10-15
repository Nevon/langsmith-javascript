// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Langsmith from 'langsmith';

const client = new Langsmith({
  apiKey: 'My API Key',
  tenantID: 'My Tenant ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource promptWebhooks', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.promptWebhooks.create({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.promptWebhooks.create({
      url: 'https://example.com',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      exclude_prompts: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      headers: { foo: 'bar' },
      include_prompts: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      triggers: ['commit'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.promptWebhooks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.promptWebhooks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.promptWebhooks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.promptWebhooks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('test: only required params', async () => {
    const responsePromise = client.promptWebhooks.test({
      payload: {
        commit_hash: 'commit_hash',
        created_at: 'created_at',
        created_by: 'created_by',
        event: 'commit',
        manifest: { foo: 'bar' },
        prompt_id: 'prompt_id',
        prompt_name: 'prompt_name',
      },
      webhook: { url: 'https://example.com' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('test: required and optional params', async () => {
    const response = await client.promptWebhooks.test({
      payload: {
        commit_hash: 'commit_hash',
        created_at: 'created_at',
        created_by: 'created_by',
        event: 'commit',
        manifest: { foo: 'bar' },
        prompt_id: 'prompt_id',
        prompt_name: 'prompt_name',
        tag_name: 'tag_name',
      },
      webhook: {
        url: 'https://example.com',
        exclude_prompts: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        headers: { foo: 'bar' },
        include_prompts: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        triggers: ['commit'],
      },
    });
  });
});
