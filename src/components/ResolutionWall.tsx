import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

const fetchResolutions = async () => {
  const { data, error } = await supabase
    .from('resolutions')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

const ResolutionWall = () => {
  const [newResolution, setNewResolution] = useState('');
  const [authorName, setAuthorName] = useState('');

  const { data: resolutions, refetch } = useQuery({
    queryKey: ['resolutions'],
    queryFn: fetchResolutions,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResolution.trim()) return;

    const { error } = await supabase
      .from('resolutions')
      .insert([
        { 
          resolution: newResolution.trim(),
          author_name: authorName.trim() || 'Anonymous'
        }
      ]);

    if (!error) {
      setNewResolution('');
      setAuthorName('');
      refetch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          value={newResolution}
          onChange={(e) => setNewResolution(e.target.value)}
          placeholder="Share your New Year's resolution..."
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
        />
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
        />
        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-primary hover:bg-primary/80 text-white font-semibold transition-colors"
        >
          Share Resolution
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resolutions?.map((resolution, index) => (
          <motion.div
            key={resolution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4">
                <p className="text-white mb-2">{resolution.resolution}</p>
                <p className="text-sm text-secondary-foreground">- {resolution.author_name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResolutionWall;