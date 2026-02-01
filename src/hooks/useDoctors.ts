import { useQuery } from '@tanstack/react-query'
import { fetchJSON } from '../services/api'

export function useDoctors() {
  return useQuery(['doctors'], () => fetchJSON('/api/doctors'))
}
