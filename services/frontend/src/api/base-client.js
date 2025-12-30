import axios from 'axios';

if (typeof window === 'undefined') {
  // Server-side
  // If running on Vercel, we need the full URL to the VPS
  // If running in K8s (legacy), fallback to internal service
  const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';

  return axios.create({
    baseURL,
    headers: context.req.headers
  });
} else {
  // Client-side
  // Uses the configured API URL or defaults to relative path (if proxying)
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/'
  });
}
}

export default buildClient;