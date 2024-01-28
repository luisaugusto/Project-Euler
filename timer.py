import time


class Timer:
    start_time = None

    def __init__(self):
        self.start()

    def start(self):
        if self.start_time is None:
            self.start_time = time.time()
        else:
            print("Timer has already started.")

    def end(self):
        if self.start_time is None:
            print("Timer is not currently running.")
        else:
            diff_ms = (time.time() - self.start_time) * 1000
            print("Timer ran for {} ms".format(diff_ms))
            self.start_time = None
