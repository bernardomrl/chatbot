'use client';

import ReactMarkdown from 'react-markdown';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

import { useChat } from 'ai/react';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  });

  return (
    <Card className="w-[440px] rounded-xl bg-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          bernardomrl
          <span className="rounded-full bg-black px-4 py-[2px] text-sm font-bold text-white opacity-75">
            beta
          </span>
        </CardTitle>
        <CardDescription>
          Um chatbot desenvolvido com base nas minhas características e
          personalidade.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full overflow-y-auto pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="mb-8 flex gap-3 text-sm text-slate-600"
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>User</AvatarFallback>
                    <AvatarImage src="/guest.png" />
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>BM</AvatarFallback>
                    <AvatarImage src="https://github.com/bernardomrl.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Visitante' : 'Bernardo'}:
                  </span>
                  <ReactMarkdown className="message">
                    {message.content}
                  </ReactMarkdown>
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Quantos anos você tem? Onde estuda?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
