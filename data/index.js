import { v4 } from 'node-uuid'

const fakeDatabase = [
  {
    id: v4(),
    changelist: 'Tenrox R1_1235',
    owner: '',
    time_started: '',
    state: 'Pending',
    metrics: {
      status: 'pending',
      progress: 0,
      test: 0,
      maintanability: 0,
      security: 0,
      workmanship: 0
    },
    build: 0,
    unit_test: 0,
    func_test: 0
  },
  {
    id: v4(),
    changelist: '432462',
    owner: 'jtuk',
    time_started: '4/18/2014 12:12pm',
    state: 'Running',
    metrics: {
      status: 'running',
      progress: 50,
      test: 0,
      maintanability: 0,
      security: 0,
      workmanship: 0
    },
    build: 0,
    unit_test: 0,
    func_test: 0
  },
  {
    id: v4(),
    changelist: '432461',
    owner: 'samy',
    time_started: '4/18/2014 10:53am',
    state: 'Rejected',
    metrics: {
      status: 'rejected',
      progress: 100,
      test: 64,
      maintanability: 53,
      security: 64,
      workmanship: 72
    },
    build: 0,
    unit_test: 0,
    func_test: 0
  },
  {
    id: v4(),
    changelist: 'Tenrox-R1_1234',
    owner: '',
    time_started: '4/17/2014 9:42am',
    state: 'Complete',
    metrics: {
      status: 'complete',
      progress: 100,
      test: 64,
      maintanability: 53,
      security: 64,
      workmanship: 72
    },
    build: 0,
    unit_test: 0,
    func_test: 0
  },
  {
    id: v4(),
    changelist: '432460',
    owner: 'samy',
    time_started: '4/17/2014 7:51am',
    state: 'Rejected',
    metrics: 0,
    build: 0,
    unit_test: 0,
    func_test: 0
  },
  {
    id: v4(),
    changelist: '432459',
    owner: 'samy',
    time_started: '4/16/2014 6:43am',
    state: 'Accepted',
    metrics: 0,
    build: 0,
    unit_test: 0,
    func_test: 0
  },
]

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchData = () => delay(500).then(() => fakeDatabase)