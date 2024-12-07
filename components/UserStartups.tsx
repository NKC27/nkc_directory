import React from 'react';
import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';

interface UserStartupsProps {
  id: string;
}

const UserStartups = async ({ id }: UserStartupsProps) => {
  // Fetch startups using the author ID
  try {
    const startups: StartupTypeCard[] = await client.fetch(
      STARTUPS_BY_AUTHOR_QUERY,
      { id }
    );

    // Render the startups or fallback if none exist
    return (
      <>
        {startups.length > 0 ? (
          startups.map((startup) => (
            <StartupCard key={startup._id} post={startup} />
          ))
        ) : (
          <p className="no-result">No posts yet</p>
        )}
      </>
    );
  } catch (error) {
    console.error('Error fetching startups:', error);
    return (
      <p className="error">Failed to load startups. Please try again later.</p>
    );
  }
};

export default UserStartups;
