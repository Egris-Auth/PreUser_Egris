// components/AgentLayout.js
export default function AgentLayout() {
    const cards = [
      {
        title: 'Simple Agent Workflow',
        description: 'Create a basic AI agent workflow with multiple agents.',
      },
      {
        title: 'Multi-Agent Collaboration',
        description: 'Set up multiple AI agents to work together on a complex task.',
      },
      {
        title: 'Tool Integration',
        description: 'Integrate external tools and APIs into an AI agent workflow.',
      },
      {
        title: 'Customizable Agent Behavior',
        description: 'Design a specialized AI agent with custom decision-making logic.',
      },
    ];
  
    const code = `
  import { Swarm, Agent } from 'ai-agent-sdk';
  
  const client = new Swarm();
  
  const transferToAgentB = (): Agent => {
    return agentB;
  };
  
  const agentA = new Agent({
    name: "Agent A",
    instructions: "You are a helpful agent.",
    functions: [transferToAgentB],
  });
  
  const agentB = new Agent({
    name: "Agent B",
    ...
  });
    `;
  
    return (
      <div className="bg-[#0a0a0a] text-white p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#181818] p-5 rounded-sm border border-[#222] hover:border-neutral-500 transition"
              >
                <h3 className="text-lg">{card.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{card.description}</p>
              </div>
            ))}
          </div>
  
          {/* Right Panel */}
          <div className="bg-[#0a0a0a] p-5 rounded-sm border border-[#222] overflow-auto">
            <pre className="text-sm whitespace-pre-wrap text-gray-300">
                <code>
                    <span className="text-red-400">import</span> &#123; <span className="text-green-400">EmailLinkSignIn</span> &#125; <span className="text-red-400">from</span> <span className="text-green-400">'egrisauth'</span>;
                    {'\n\n'}
                    <span className="text-red-400">export default async function</span> <span className="text-yellow-400">handleLogin</span>() &#123;
                    {'\n  '}
                    <span className="text-purple-400">const</span> email = <span className="text-white-400">'user@example.com'</span>;
                    {'\n  '}
                    <span className="text-purple-400">const</span> password = <span className="text-white-400">'********'</span>;
                    {'\n\n  '}
                    <span className="text-purple-400">const</span> session = <span className="text-cyan-400">await</span> <span className="text-green-400">EmailLinkSignIn</span>(email, password);
                    {'\n\n  '}
                    <span className="text-purple-400">if</span> (session) &#123;
                    {'\n    '}
                        <span className="text-cyan-400">console</span>.log(<span className="text-white-400">'User signed in successfully'</span>);
                    {'\n  '}
                    &#125; <span className="text-purple-400">else</span> &#123;
                    {'\n    '}
                        <span className="text-cyan-400">console</span>.error(<span className="text-white-400">'Login failed'</span>);
                    {'\n  '}
                    &#125;
                    {'\n'}
                    &#125;
                </code>
            </pre>
          </div>
        </div>
      </div>
    );
}  