'use client';

import Link from 'next/link';
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
    <Card className="w-full h-[calc(100vh-1rem)] flex flex-col justify-between items-start max-w-lg rounded-xl bg-white overflow-hidden m-2">
      <div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Link href="https://github.com/bernardomrl" target='_blank' className="hover:opacity-50 transition-opacity">bernardomrl</Link>
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
        <ScrollArea className="w-full overflow-y-auto overflow-hidden max-h-[calc(100vh-14rem)] h-full flex flex-col justify-start items-start pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className={`flex gap-3 mb-4 text-sm text-slate-600 justify-self-start p-4 rounded-xl ${message.role === 'user' ? 'bg-gray-200' : 'bg-gray-200/50'}`}
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
                    {message.role === 'user' ? 'Visitante' : 'Bernardo'}
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
      </div>
       <CardFooter className="w-full">
        <form className="flex w-full justify-between gap-2 items-center" onSubmit={handleSubmit}>
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
