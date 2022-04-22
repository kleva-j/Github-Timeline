export function mapTime(timestamp: number) {
  const seconds = Math.floor((Number(new Date()) - timestamp) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }

  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months`;
  }

  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }

  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }

  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
}

export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.log('parsing error on', { value });
    return undefined;
  }
}

export const getJobDetails = (job) => {
  const { slug = "", commitment, title = '', description = '', remotes, company, postedAt, tags = [], applyUrl = '' } = job;
  const cities = job.cities || [];
  const { name: city, country } = cities[0] ?? {};
  const isRemote = !!(remotes && remotes.length);
  const type = isRemote ? 'remote' : commitment.slug;
  const locationLabel = isRemote ? 'Anywhere' : `${city}, ${country?.isoCode?.toUpperCase()}`;

  const timeDiff = mapTime(Date.parse(postedAt));

  return {
    slug,
    commitment,
    title,
    description,
    remotes,
    company,
    postedAt,
    timeDiff,
    type,
    locationLabel,
    isRemote,
    city,
    country,
    cities,
    tags,
    applyUrl,
  };
};
