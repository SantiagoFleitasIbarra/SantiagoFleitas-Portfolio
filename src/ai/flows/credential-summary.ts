// use server'

/**
 * @fileOverview Summarizes credentials (certifications, degrees, etc.) to quickly assess a candidate's suitability.
 *
 * - summarizeCredential - A function that summarizes a credential's key skills and knowledge.
 * - SummarizeCredentialInput - The input type for the summarizeCredential function.
 * - SummarizeCredentialOutput - The return type for the summarizeCredential function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCredentialInputSchema = z.object({
  credentialText: z
    .string()
    .describe('The text or description of the credential (e.g., course description, certification details).'),
});
export type SummarizeCredentialInput = z.infer<typeof SummarizeCredentialInputSchema>;

const SummarizeCredentialOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the key skills and knowledge gained from the credential.'),
});
export type SummarizeCredentialOutput = z.infer<typeof SummarizeCredentialOutputSchema>;

export async function summarizeCredential(input: SummarizeCredentialInput): Promise<SummarizeCredentialOutput> {
  return summarizeCredentialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCredentialPrompt',
  input: {schema: SummarizeCredentialInputSchema},
  output: {schema: SummarizeCredentialOutputSchema},
  prompt: `You are a helpful assistant that summarizes credentials to quickly assess a candidate's suitability for a role.

  Summarize the key skills and knowledge gained from the following credential:

  {{credentialText}}
  `,
});

const summarizeCredentialFlow = ai.defineFlow(
  {
    name: 'summarizeCredentialFlow',
    inputSchema: SummarizeCredentialInputSchema,
    outputSchema: SummarizeCredentialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
